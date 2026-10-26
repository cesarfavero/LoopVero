# `classifyUserFormFailureReason`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727194-727209](../../../../../../../reference/runtime/host-main.cjs#L727194-L727209) | `FunctionDeclaration` | não | `result, outcomes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727194-727209](../../../../../../../reference/runtime/host-main.cjs#L727194-L727209) | 6 | 1 | 0 | 5 | 0 | 0 |

### host:727194

Chamadas escritas diretamente neste corpo: `Object.values`, `outcomes.some`.

Alvos de atribuição ou incremento: `mostDiagnostic`.

SHA-256 do trecho: `ed67118d9021aa6960989957f4a71308e0d32a420838e0f1094c125ce968c5f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
