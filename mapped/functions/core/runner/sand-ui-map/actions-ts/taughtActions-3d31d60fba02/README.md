# `taughtActions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-ui-map/actions.ts` · [README do módulo](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557894-557911](../../../../../../../reference/runtime/host-main.cjs#L557894-L557911) | `FunctionDeclaration` | não | `facts` |
| [evaluation:550702-550719](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550702-L550719) | `FunctionDeclaration` | não | `facts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557894-557911](../../../../../../../reference/runtime/host-main.cjs#L557894-L557911) | 6 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:550702-550719](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550702-L550719) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:557894

Chamadas escritas diretamente neste corpo: `NEVER_TAUGHT_ANCHORS.has`, `actionValues`, `adminLockRemovesChoice`, `rowOf`, `rowShows`, `taught.push`.

SHA-256 do trecho: `519d7580e12d95d049083edbda17539c3fcaa1a53c4b2309cb1c7233af6d079a`.

### evaluation:550702

Chamadas escritas diretamente neste corpo: `NEVER_TAUGHT_ANCHORS.has`, `actionValues`, `adminLockRemovesChoice`, `rowOf`, `rowShows`, `taught.push`.

SHA-256 do trecho: `519d7580e12d95d049083edbda17539c3fcaa1a53c4b2309cb1c7233af6d079a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
