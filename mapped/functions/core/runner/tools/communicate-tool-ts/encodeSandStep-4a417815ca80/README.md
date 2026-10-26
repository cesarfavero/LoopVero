# `encodeSandStep`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724959-724961](../../../../../../../reference/runtime/host-main.cjs#L724959-L724961) | `FunctionDeclaration` | não | `payload` |
| [evaluation:479930-479932](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479930-L479932) | `FunctionDeclaration` | não | `payload` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724959-724961](../../../../../../../reference/runtime/host-main.cjs#L724959-L724961) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479930-479932](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479930-L479932) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724959

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `5cf881bc6a58533854f9554807d5606bacebfb2f9a3f57e46067f60989a85b9e`.

### evaluation:479930

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `5cf881bc6a58533854f9554807d5606bacebfb2f9a3f57e46067f60989a85b9e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
