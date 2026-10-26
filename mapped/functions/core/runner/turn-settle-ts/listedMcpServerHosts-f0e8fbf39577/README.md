# `listedMcpServerHosts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590670-590681](../../../../../../reference/runtime/sand-eval-runner.cjs#L590670-L590681) | `FunctionDeclaration` | sim | `listHosts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590670-590681](../../../../../../reference/runtime/sand-eval-runner.cjs#L590670-L590681) | 0 | 0 | 1 | 2 | 0 | 1 |

### evaluation:590670

Chamadas escritas diretamente neste corpo: `errorLogTag`, `listHosts`, `reportHostDiagnostic`, `withTimeout`.

SHA-256 do trecho: `ce41f1edba8a1327b553c779d7d6c3e2dad68be6b284f6e8db1f94230bb5191f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
