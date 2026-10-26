# `hasVaultPostalAddress`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/secure-values/vault-contact.ts` · [README do módulo](../../../../../../modules/core/runner/secure-values/vault-contact-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724436-724438](../../../../../../../reference/runtime/host-main.cjs#L724436-L724438) | `FunctionDeclaration` | não | `address` |
| [evaluation:549915-549917](../../../../../../../reference/runtime/sand-eval-runner.cjs#L549915-L549917) | `FunctionDeclaration` | não | `address` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724436-724438](../../../../../../../reference/runtime/host-main.cjs#L724436-L724438) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549915-549917](../../../../../../../reference/runtime/sand-eval-runner.cjs#L549915-L549917) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724436

Chamadas escritas diretamente neste corpo: `POSTAL_LINE_KEYS.some`.

SHA-256 do trecho: `064ffbfc3f6e5787de40112cd1b0958867096858a739251dfb060d7abeaceee7`.

### evaluation:549915

Chamadas escritas diretamente neste corpo: `POSTAL_LINE_KEYS.some`.

SHA-256 do trecho: `064ffbfc3f6e5787de40112cd1b0958867096858a739251dfb060d7abeaceee7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
