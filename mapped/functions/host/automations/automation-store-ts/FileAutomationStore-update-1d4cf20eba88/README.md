# `FileAutomationStore.update`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720618-720631](../../../../../../reference/runtime/host-main.cjs#L720618-L720631) | `method` | não | `id, spec, provenance` |
| [evaluation:627969-627982](../../../../../../reference/runtime/sand-eval-runner.cjs#L627969-L627982) | `method` | não | `id, spec, provenance` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720618-720631](../../../../../../reference/runtime/host-main.cjs#L720618-L720631) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:627969-627982](../../../../../../reference/runtime/sand-eval-runner.cjs#L627969-L627982) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:720618

Chamadas escritas diretamente neste corpo: `automationConfigWithSpec`, `isSafeFolderId`, `this.readConfig`, `this.toRecord`, `this.writeConfig`.

SHA-256 do trecho: `dec2054879f741393785eb7709fb952201203c2486d58a541041f4a01b3ad992`.

### evaluation:627969

Chamadas escritas diretamente neste corpo: `automationConfigWithSpec`, `isSafeFolderId`, `this.readConfig`, `this.toRecord`, `this.writeConfig`.

SHA-256 do trecho: `dec2054879f741393785eb7709fb952201203c2486d58a541041f4a01b3ad992`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
