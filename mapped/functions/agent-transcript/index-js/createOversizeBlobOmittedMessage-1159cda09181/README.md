# `createOversizeBlobOmittedMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-transcript/index.js` · [README do módulo](../../../../modules/agent-transcript/index-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509730-509735](../../../../../reference/runtime/host-main.cjs#L509730-L509735) | `FunctionDeclaration` | não | `blobSizeBytes` |
| [evaluation:304105-304110](../../../../../reference/runtime/sand-eval-runner.cjs#L304105-L304110) | `FunctionDeclaration` | não | `blobSizeBytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509730-509735](../../../../../reference/runtime/host-main.cjs#L509730-L509735) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304105-304110](../../../../../reference/runtime/sand-eval-runner.cjs#L304105-L304110) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509730

Chamadas escritas diretamente neste corpo: `formatBlobSizeMegabytes`.

SHA-256 do trecho: `83a2f56b5655ea374affbb51f994863e1c9076862bc853a6f16244bc0b257406`.

### evaluation:304105

Chamadas escritas diretamente neste corpo: `formatBlobSizeMegabytes`.

SHA-256 do trecho: `83a2f56b5655ea374affbb51f994863e1c9076862bc853a6f16244bc0b257406`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
