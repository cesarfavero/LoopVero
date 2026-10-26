# `computeNegationReach`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/workspace-ignore.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/workspace-ignore-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:482323-482332](../../../../../../../reference/runtime/host-main.cjs#L482323-L482332) | `FunctionDeclaration` | não | `pattern, anchored` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482323-482332](../../../../../../../reference/runtime/host-main.cjs#L482323-L482332) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:482323

Chamadas escritas diretamente neste corpo: `/[*?[]/.test`, `literal4.join`, `literal4.push`, `pattern.split`.

SHA-256 do trecho: `9bdfabd79168d4b8e568e6616f0075fbe43fc567d7ba8ce3cbe3d30f189f6bad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
