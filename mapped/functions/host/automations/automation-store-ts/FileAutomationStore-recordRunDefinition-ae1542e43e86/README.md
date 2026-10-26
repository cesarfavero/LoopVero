# `FileAutomationStore.recordRunDefinition`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720661-720663](../../../../../../reference/runtime/host-main.cjs#L720661-L720663) | `method` | não | `id, at3 = Date.now()` |
| [evaluation:628012-628014](../../../../../../reference/runtime/sand-eval-runner.cjs#L628012-L628014) | `method` | não | `id, at3 = Date.now()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720661-720663](../../../../../../reference/runtime/host-main.cjs#L720661-L720663) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:628012-628014](../../../../../../reference/runtime/sand-eval-runner.cjs#L628012-L628014) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:720661

Chamadas escritas diretamente neste corpo: `this.recordRunWith`.

SHA-256 do trecho: `6ef12505f13b5d028d29220749772161fee5980a77396177d6433ec32a99b5e3`.

### evaluation:628012

Chamadas escritas diretamente neste corpo: `this.recordRunWith`.

SHA-256 do trecho: `6ef12505f13b5d028d29220749772161fee5980a77396177d6433ec32a99b5e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
