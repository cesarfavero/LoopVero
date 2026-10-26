# `describeReadNotifications`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/android-read-notifications.ts` · [README do módulo](../../../../../modules/core/device-local-tools/android-read-notifications-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759067-759074](../../../../../../reference/runtime/host-main.cjs#L759067-L759074) | `FunctionDeclaration` | não | `app` |
| [evaluation:549227-549234](../../../../../../reference/runtime/sand-eval-runner.cjs#L549227-L549234) | `FunctionDeclaration` | não | `app` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759067-759074](../../../../../../reference/runtime/host-main.cjs#L759067-L759074) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549227-549234](../../../../../../reference/runtime/sand-eval-runner.cjs#L549227-L549234) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:759067

Chamadas escritas diretamente neste corpo: `.trim`, `app.replace`, `words2.slice`.

SHA-256 do trecho: `54a6e2ca421a24260530f583e45d159acbded4340e1126cb3c529689b46f8434`.

### evaluation:549227

Chamadas escritas diretamente neste corpo: `.trim`, `app.replace`, `words.slice`.

SHA-256 do trecho: `dfc9dc5ef405a7fbab7f45b70f134766d9584cdac691a169366e92f2fa4f076d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
