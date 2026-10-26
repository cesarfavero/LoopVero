# `describeRemovalRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780148-780159](../../../../../../../reference/runtime/host-main.cjs#L780148-L780159) | `FunctionDeclaration` | não | `refusal4, target` |
| [evaluation:580393-580404](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580393-L580404) | `FunctionDeclaration` | não | `refusal4, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780148-780159](../../../../../../../reference/runtime/host-main.cjs#L780148-L780159) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:580393-580404](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580393-L580404) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:780148

Chamadas escritas diretamente neste corpo: `describeRepair`, `removalEffect`.

SHA-256 do trecho: `bc6a0fa73e32ce5a28bb746e9d5d3ab04121423ae59d8add25ba182196db3d71`.

### evaluation:580393

Chamadas escritas diretamente neste corpo: `describeRepair`, `removalEffect`.

SHA-256 do trecho: `bc6a0fa73e32ce5a28bb746e9d5d3ab04121423ae59d8add25ba182196db3d71`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
