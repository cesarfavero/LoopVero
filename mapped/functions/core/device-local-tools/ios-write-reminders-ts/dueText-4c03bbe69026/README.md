# `dueText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/ios-write-reminders.ts` · [README do módulo](../../../../../modules/core/device-local-tools/ios-write-reminders-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758954-758959](../../../../../../reference/runtime/host-main.cjs#L758954-L758959) | `FunctionDeclaration` | não | `due` |
| [evaluation:549114-549119](../../../../../../reference/runtime/sand-eval-runner.cjs#L549114-L549119) | `FunctionDeclaration` | não | `due` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758954-758959](../../../../../../reference/runtime/host-main.cjs#L758954-L758959) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549114-549119](../../../../../../reference/runtime/sand-eval-runner.cjs#L549114-L549119) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:758954

Chamadas escritas diretamente neste corpo: `.replace`, `DUE_ZONE.exec`, `due.slice`.

SHA-256 do trecho: `32a24fd74ccd19bc1e3af1c3bd1243ffe7ff6484050560033e6595eb495f105c`.

### evaluation:549114

Chamadas escritas diretamente neste corpo: `.replace`, `DUE_ZONE.exec`, `due.slice`.

SHA-256 do trecho: `32a24fd74ccd19bc1e3af1c3bd1243ffe7ff6484050560033e6595eb495f105c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
