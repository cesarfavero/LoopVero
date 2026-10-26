# `formPrefillValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/secure-values/vault-contact.ts` · [README do módulo](../../../../../../modules/core/runner/secure-values/vault-contact-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724531-724539](../../../../../../../reference/runtime/host-main.cjs#L724531-L724539) | `FunctionDeclaration` | não | `id, raw` |
| [evaluation:550010-550018](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550010-L550018) | `FunctionDeclaration` | não | `id, raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724531-724539](../../../../../../../reference/runtime/host-main.cjs#L724531-L724539) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:550010-550018](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550010-L550018) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:724531

Chamadas escritas diretamente neste corpo: `.slice`, `canonicalVaultCountryCode`, `isVaultCountryCode`, `raw.trim`.

SHA-256 do trecho: `909e407d360adbea206446fa657200a3538c5785866e8da842d56d3ca7b31e7b`.

### evaluation:550010

Chamadas escritas diretamente neste corpo: `.slice`, `canonicalVaultCountryCode`, `isVaultCountryCode`, `raw.trim`.

SHA-256 do trecho: `909e407d360adbea206446fa657200a3538c5785866e8da842d56d3ca7b31e7b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
