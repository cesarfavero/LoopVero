# `allowsSystemReminder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/reminders/system-reminders.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/system-reminders-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725599-725601](../../../../../../../reference/runtime/host-main.cjs#L725599-L725601) | `FunctionDeclaration` | não | `host, id` |
| [evaluation:480329-480331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480329-L480331) | `FunctionDeclaration` | não | `host, id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725599-725601](../../../../../../../reference/runtime/host-main.cjs#L725599-L725601) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480329-480331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480329-L480331) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725599

Chamadas escritas diretamente neste corpo: `host.systemReminders`.

SHA-256 do trecho: `e5e08a7ef2b56bfe3438f2b8bc643641efe224fde4e907207924c0dcb46a6f34`.

### evaluation:480329

Chamadas escritas diretamente neste corpo: `host.systemReminders`.

SHA-256 do trecho: `e5e08a7ef2b56bfe3438f2b8bc643641efe224fde4e907207924c0dcb46a6f34`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
