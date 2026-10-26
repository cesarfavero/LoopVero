# `globToRegexBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/workspace-ignore.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/workspace-ignore-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:482339-482381](../../../../../../../reference/runtime/host-main.cjs#L482339-L482381) | `FunctionDeclaration` | não | `glob` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482339-482381](../../../../../../../reference/runtime/host-main.cjs#L482339-L482381) | 7 | 2 | 0 | 1 | 0 | 0 |

### host:482339

Chamadas escritas diretamente neste corpo: `escapeRegexChar`, `readCharClass`.

Alvos de atribuição ou incremento: `i`, `j2`, `re3`.

SHA-256 do trecho: `f6ae65b51395719dc33bcc86c7cd2bac82fe4d0ddf91e8d0b6a7b0495eb5d66d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
