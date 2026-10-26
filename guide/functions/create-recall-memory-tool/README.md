# `createRecallMemoryTool`

[Componente: memory](../../components/memory/README.md) · [Índice](../../README.md)

**Fonte primária:** [host-main.cjs:769686-769840](../../../reference/runtime/host-main.cjs#L769686-L769840). Análise estática do snapshot original; nomes preservados do bundle.

## Contrato

`createRecallMemoryTool(deps, offersMemoryUpdate=true, library=false)` cria a ferramenta de leitura `RecallMemory`. A flag de atualização altera orientação textual; não faz uma escrita. A flag library habilita abrir arquivo por path além de query.

## Decisões

Sem library, exige query não vazia e encaminha a `recallMemory`. Com library, um path não vazio tem precedência sobre query; sem ambos, retorna instrução de uso. `openMemoryFile` normaliza extensão e barra, tenta caminho exato e depois sufixo; múltiplos caminhos recusam a escolha automática.

## Busca

A execução junta candidatos dos stores disponíveis via mount `/memories` e usa busca lexical por sobreposição, com fallback literal quando não há ranking. O limite é 20 por padrão, no máximo 50. A apresentação tem orçamento de 4.000 caracteres, permitindo ao menos um item mesmo se exceder o orçamento. Data, tipo e origem visível acompanham resultados.

## Erros e ambiguidade

Nenhuma correspondência retorna mensagem com número de fatos examinados. Arquivo ausente ou ambíguo retorna orientação para query/caminho completo. Métrica de recall conta escopo e se houve resultado; não publica o texto dos fatos na métrica.

## Fronteira

Os dados disponíveis dependem dos stores fornecidos e das ACLs de suas portas. A ferramenta não pesquisa todo o histórico remoto nem usa, neste caminho recuperado, embeddings. O helper `memoryRecallRank` de decaimento é separado do ranking lexical desta busca.
