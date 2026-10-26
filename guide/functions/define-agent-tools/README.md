# `defineAgentTools`

[Componente: tools](../../components/tools/README.md) · [Índice](../../README.md)

**Fonte primária:** [host-main.cjs:756590-756630](../../../reference/runtime/host-main.cjs#L756590-L756630). Análise estática do snapshot original; nomes preservados do bundle.

## Assinatura e finalidade

`defineAgentTools(spec)` transforma uma especificação declarativa em política total sobre os IDs de ferramenta conhecidos. A saída registra oferecidas, omitidas, placement, hints e acesso a conectores. Não executa uma ferramenta.

## Algoritmo

1. Constrói conjuntos de inclusão por nome/grupo e mapas de omissão com motivos.
2. Percorre `GROK_BOT_TOOL_IDS`.
3. Se o mesmo nome foi explicitamente incluído e omitido, lança erro.
4. Inclusão nominal ganha dos grupos; omissão nominal ganha de inclusão por grupo.
5. Conflito entre grupos incluídos/omitidos exige decisão nominal.
6. Sem inclusão nem motivo de omissão, lança erro: uma ferramenta nova não fica implicitamente liberada.
7. Valida que ferramentas top-level e hints pertencem ao conjunto oferecido.
8. Delega a `agentTools` para materializar o objeto de política.

## Contratos e efeitos

Entrada é uma especificação em memória. Saída é outro objeto em memória; não há rede ou persistência. O erro é síncrono e impede montar uma política inconsistente. `extendAgentTools` deriva variantes depois, sem alterar a base por referência, usando cópias de conjuntos/mapas.

## Consequência para uma reconstrução

Adicionar uma ferramenta exige decidir seu lugar em todos os manifestos, ou herdar uma decisão explícita por grupo. “Aparece no catálogo” e “permitida para o agente” continuam verificações distintas. A lógica do manifesto não substitui autorização da chamada concreta.
