# `FileAutomationStore.recordRunWith`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720664-720675](../../../../../../reference/runtime/host-main.cjs#L720664-L720675) | `method` | não | `{     id,     at: at3,     deriveNextRunAt   }` |
| [evaluation:628015-628026](../../../../../../reference/runtime/sand-eval-runner.cjs#L628015-L628026) | `method` | não | `{     id,     at: at3,     deriveNextRunAt   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720664-720675](../../../../../../reference/runtime/host-main.cjs#L720664-L720675) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:628015-628026](../../../../../../reference/runtime/sand-eval-runner.cjs#L628015-L628026) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:720664

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `this.readConfig`, `this.toRecord`, `this.writeConfig`.

SHA-256 do trecho: `a66203c69e0b674b791d51bd50a594dc20cf63255299c870a6bdd8559bff6b07`.

### evaluation:628015

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `this.readConfig`, `this.toRecord`, `this.writeConfig`.

SHA-256 do trecho: `a66203c69e0b674b791d51bd50a594dc20cf63255299c870a6bdd8559bff6b07`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
