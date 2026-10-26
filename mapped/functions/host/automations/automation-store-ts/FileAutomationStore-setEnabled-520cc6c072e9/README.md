# `FileAutomationStore.setEnabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720647-720657](../../../../../../reference/runtime/host-main.cjs#L720647-L720657) | `method` | não | `id, isEnabled` |
| [evaluation:627998-628008](../../../../../../reference/runtime/sand-eval-runner.cjs#L627998-L628008) | `method` | não | `id, isEnabled` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720647-720657](../../../../../../reference/runtime/host-main.cjs#L720647-L720657) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:627998-628008](../../../../../../reference/runtime/sand-eval-runner.cjs#L627998-L628008) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:720647

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `this.readConfig`, `this.toRecord`, `this.writeConfig`.

SHA-256 do trecho: `21a070703977903f7668cf04b85d5d8c3d6618442f3514d8e809e823a1d93c00`.

### evaluation:627998

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `this.readConfig`, `this.toRecord`, `this.writeConfig`.

SHA-256 do trecho: `21a070703977903f7668cf04b85d5d8c3d6618442f3514d8e809e823a1d93c00`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
