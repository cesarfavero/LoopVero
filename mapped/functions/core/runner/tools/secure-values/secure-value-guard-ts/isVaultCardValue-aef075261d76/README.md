# `isVaultCardValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/secure-value-guard.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767601-767603](../../../../../../../../reference/runtime/host-main.cjs#L767601-L767603) | `FunctionDeclaration` | não | `entry` |
| [evaluation:563118-563120](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563118-L563120) | `FunctionDeclaration` | não | `entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767601-767603](../../../../../../../../reference/runtime/host-main.cjs#L767601-L767603) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563118-563120](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563118-L563120) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:767601

Chamadas escritas diretamente neste corpo: `VAULT_CARD_FIELD_SUFFIX.test`, `entry.name.slice`, `entry.name.startsWith`.

SHA-256 do trecho: `bea6424d9459b4b7cf176f3e127b4153e9aa7e75eba162804c5521f733f77420`.

### evaluation:563118

Chamadas escritas diretamente neste corpo: `VAULT_CARD_FIELD_SUFFIX.test`, `entry.name.slice`, `entry.name.startsWith`.

SHA-256 do trecho: `bea6424d9459b4b7cf176f3e127b4153e9aa7e75eba162804c5521f733f77420`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
