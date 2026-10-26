# `FileAutomationStore.markNoticeRaised`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720632-720646](../../../../../../reference/runtime/host-main.cjs#L720632-L720646) | `method` | não | `id, notice` |
| [evaluation:627983-627997](../../../../../../reference/runtime/sand-eval-runner.cjs#L627983-L627997) | `method` | não | `id, notice` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720632-720646](../../../../../../reference/runtime/host-main.cjs#L720632-L720646) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:627983-627997](../../../../../../reference/runtime/sand-eval-runner.cjs#L627983-L627997) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:720632

Chamadas escritas diretamente neste corpo: `config2.pendingNotices.filter`, `config2.raisedNotices.includes`, `isAutomationNoticeId`, `isSafeFolderId`, `this.readConfig`, `this.toRecord`, `this.writeConfig`.

SHA-256 do trecho: `8840b37fcb8215f11beea73506b76e5bb39850a2314fc9c49bb4a816e059049a`.

### evaluation:627983

Chamadas escritas diretamente neste corpo: `config2.pendingNotices.filter`, `config2.raisedNotices.includes`, `isAutomationNoticeId`, `isSafeFolderId`, `this.readConfig`, `this.toRecord`, `this.writeConfig`.

SHA-256 do trecho: `8840b37fcb8215f11beea73506b76e5bb39850a2314fc9c49bb4a816e059049a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
