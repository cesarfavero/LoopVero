# `inspectBrowserDocument/isLockedIdentityControl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547494-547494](../../../../../../../reference/runtime/host-main.cjs#L547494-L547494) | `ArrowFunctionExpression` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547494-547494](../../../../../../../reference/runtime/host-main.cjs#L547494-L547494) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:547494 usa retorno implícito de arrow function.

### host:547494

Chamadas escritas diretamente neste corpo: `Element.prototype.matches.call`, `input2.getAttribute`, `input2.value.trim`.

SHA-256 do trecho: `0341e9eba7cdd837dd56a3c0e79024bcee0bd3b051e0b84594fa7beafd6023a5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
