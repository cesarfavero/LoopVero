# `renderNotConnectedRoute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-credential-provider-status-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-credential-provider-status-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751734-751738](../../../../../../../reference/runtime/host-main.cjs#L751734-L751738) | `FunctionDeclaration` | sim | `offer` |
| [evaluation:524800-524804](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524800-L524804) | `FunctionDeclaration` | sim | `offer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751734-751738](../../../../../../../reference/runtime/host-main.cjs#L751734-L751738) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:524800-524804](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524800-L524804) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:751734

Chamadas escritas diretamente neste corpo: `.catch`, `offer.isDeclined`.

SHA-256 do trecho: `e31cf745beff9e8afff16c799fe21f5689af6a32b65fd1df0b3cdd78536aacdc`.

### evaluation:524800

Chamadas escritas diretamente neste corpo: `.catch`, `offer.isDeclined`.

SHA-256 do trecho: `e31cf745beff9e8afff16c799fe21f5689af6a32b65fd1df0b3cdd78536aacdc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
