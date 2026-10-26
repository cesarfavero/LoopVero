# `SharedDesktopSandBox.refreshAssignedWindows`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:555157-555161](../../../../../../reference/runtime/host-main.cjs#L555157-L555161) | `method` | sim | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555157-555161](../../../../../../reference/runtime/host-main.cjs#L555157-L555161) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:555157

Chamadas escritas diretamente neste corpo: `this.adoptUnseatedAssignments`, `this.readPersistedAssignments`.

SHA-256 do trecho: `ce463cb2ec140acac838576152ccc6c86e98f8f3c4a19b0fe426e16edea5e6e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
