# `applySeatChanges`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554263-554306](../../../../../../reference/runtime/host-main.cjs#L554263-L554306) | `FunctionDeclaration` | não | `table, changes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554263-554306](../../../../../../reference/runtime/host-main.cjs#L554263-L554306) | 15 | 2 | 0 | 4 | 0 | 0 |

### host:554263

Chamadas escritas diretamente neste corpo: `assignments.delete`, `assignments.get`, `assignments.set`, `new Map`, `tokens.delete`, `tokens.get`, `tokens.set`, `unstarted.delete`, `unstarted.has`, `unstarted.set`.

Alvos de atribuição ou incremento: `changed`.

SHA-256 do trecho: `17b8d95fde463c1d6dc33cf678d599eb40a436ea99b06e363e01aa276e7b0b89`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
