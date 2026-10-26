# `unwrapPlanContent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/durable-blocks.js` · [README do módulo](../../../../modules/agent-summarization/durable-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:619948-619951](../../../../../reference/runtime/host-main.cjs#L619948-L619951) | `FunctionDeclaration` | não | `plan` |
| [evaluation:304302-304305](../../../../../reference/runtime/sand-eval-runner.cjs#L304302-L304305) | `FunctionDeclaration` | não | `plan` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619948-619951](../../../../../reference/runtime/host-main.cjs#L619948-L619951) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304302-304305](../../../../../reference/runtime/sand-eval-runner.cjs#L304302-L304305) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:619948

Chamadas escritas diretamente neste corpo: `plan.content.unwrap`, `rawContent.trim`.

SHA-256 do trecho: `9323a8dcafabc4eacacb75fdbcc7765b98a01da8e9aacb114d30ca5dfd2c309e`.

### evaluation:304302

Chamadas escritas diretamente neste corpo: `plan.content.unwrap`, `rawContent.trim`.

SHA-256 do trecho: `9323a8dcafabc4eacacb75fdbcc7765b98a01da8e9aacb114d30ca5dfd2c309e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
