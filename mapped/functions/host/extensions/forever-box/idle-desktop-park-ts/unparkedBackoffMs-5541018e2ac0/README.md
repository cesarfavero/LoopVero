# `unparkedBackoffMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/idle-desktop-park.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/idle-desktop-park-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680018-680020](../../../../../../../reference/runtime/host-main.cjs#L680018-L680020) | `FunctionDeclaration` | não | `attempts2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680018-680020](../../../../../../../reference/runtime/host-main.cjs#L680018-L680020) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:680018

Chamadas escritas diretamente neste corpo: `Math.min`.

SHA-256 do trecho: `e5c0da591a7eed99eb616af5933718076e74db0b2d8d97ce5d964580581c2ac6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
