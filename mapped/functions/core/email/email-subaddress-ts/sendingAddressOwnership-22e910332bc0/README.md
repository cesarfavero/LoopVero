# `sendingAddressOwnership`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/email-subaddress.ts` · [README do módulo](../../../../../modules/core/email/email-subaddress-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715984-715992](../../../../../../reference/runtime/host-main.cjs#L715984-L715992) | `FunctionDeclaration` | não | `address, ownedInboxes2` |
| [evaluation:527653-527661](../../../../../../reference/runtime/sand-eval-runner.cjs#L527653-L527661) | `FunctionDeclaration` | não | `address, ownedInboxes2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715984-715992](../../../../../../reference/runtime/host-main.cjs#L715984-L715992) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:527653-527661](../../../../../../reference/runtime/sand-eval-runner.cjs#L527653-L527661) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:715984

Chamadas escritas diretamente neste corpo: `address.toLowerCase`, `emailSubaddressBase`, `owned.includes`, `ownedInboxes2.map`, `unsendableSubaddressReason`.

SHA-256 do trecho: `84fd1f10248f519c2d1333bbf6b3fef79435f32db53888118d05bb26eb512706`.

### evaluation:527653

Chamadas escritas diretamente neste corpo: `address.toLowerCase`, `emailSubaddressBase`, `owned.includes`, `ownedInboxes2.map`, `unsendableSubaddressReason`.

SHA-256 do trecho: `84fd1f10248f519c2d1333bbf6b3fef79435f32db53888118d05bb26eb512706`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
