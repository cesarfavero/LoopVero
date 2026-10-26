# `stripTags`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-transcript/context-stripping.js` · [README do módulo](../../../../modules/agent-transcript/context-stripping-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509501-509510](../../../../../reference/runtime/host-main.cjs#L509501-L509510) | `FunctionDeclaration` | não | `text3, patterns` |
| [evaluation:294679-294688](../../../../../reference/runtime/sand-eval-runner.cjs#L294679-L294688) | `FunctionDeclaration` | não | `text3, patterns` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509501-509510](../../../../../reference/runtime/host-main.cjs#L509501-L509510) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:294679-294688](../../../../../reference/runtime/sand-eval-runner.cjs#L294679-L294688) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:509501

Chamadas escritas diretamente neste corpo: `collapsed.trim`, `result.includes`, `result.replace`.

Alvos de atribuição ou incremento: `result`.

SHA-256 do trecho: `336d355e20a499d7a87ae595b00ad0502892b8f64a0cfea0f8017f7abe43bb08`.

### evaluation:294679

Chamadas escritas diretamente neste corpo: `collapsed.trim`, `result.includes`, `result.replace`.

Alvos de atribuição ou incremento: `result`.

SHA-256 do trecho: `336d355e20a499d7a87ae595b00ad0502892b8f64a0cfea0f8017f7abe43bb08`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
