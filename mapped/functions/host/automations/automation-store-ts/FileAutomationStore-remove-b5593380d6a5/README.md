# `FileAutomationStore.remove`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720783-720797](../../../../../../reference/runtime/host-main.cjs#L720783-L720797) | `method` | não | `id` |
| [evaluation:628134-628148](../../../../../../reference/runtime/sand-eval-runner.cjs#L628134-L628148) | `method` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720783-720797](../../../../../../reference/runtime/host-main.cjs#L720783-L720797) | 2 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:628134-628148](../../../../../../reference/runtime/sand-eval-runner.cjs#L628134-L628148) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:720783

Chamadas escritas diretamente neste corpo: `.isDirectory`, `isSafeFolderId`, `removeSandDataTreeSync`, `reportFallbackUnlessAbsent`, `this.dir.scheduleNotify`.

Alvos de atribuição ou incremento: `existed`.

SHA-256 do trecho: `85b50554cb199622ca05149818805035077d8d7a8842a0a8d2b7fa7ab4876778`.

### evaluation:628134

Chamadas escritas diretamente neste corpo: `.isDirectory`, `isSafeFolderId`, `removeSandDataTreeSync`, `reportFallbackUnlessAbsent`, `this.dir.scheduleNotify`.

Alvos de atribuição ou incremento: `existed`.

SHA-256 do trecho: `c171041f44ce1048caba3866d541bcfe2f235e2c9def2e3c29fedecde8cbd9ce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
