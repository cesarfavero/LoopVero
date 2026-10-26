# `refuseNestedSecretRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-secret-request.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-secret-request-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:548037-548039](../../../../../../../reference/runtime/sand-eval-runner.cjs#L548037-L548039) | `FunctionDeclaration` | não | `_name` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:548037-548039](../../../../../../../reference/runtime/sand-eval-runner.cjs#L548037-L548039) | 0 | 0 | 0 | 0 | 1 | 0 |

### evaluation:548037

Chamadas escritas diretamente neste corpo: `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `4312299c2e48ff6eb01709a1e956703a3d0f430004b9bc2ff18d5f34599c44b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
