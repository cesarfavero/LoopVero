# `isPlainAddress`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735004-735006](../../../../../../../reference/runtime/host-main.cjs#L735004-L735006) | `FunctionDeclaration` | não | `value` |
| [evaluation:540578-540580](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540578-L540580) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735004-735006](../../../../../../../reference/runtime/host-main.cjs#L735004-L735006) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540578-540580](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540578-L540580) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:735004

Chamadas escritas diretamente neste corpo: `/^[^\s@<>]+@[^\s@<>]+$/.test`.

SHA-256 do trecho: `c960d7c5b6d909c387d5221de2f45252792583a9c34287186f83a1a3804de130`.

### evaluation:540578

Chamadas escritas diretamente neste corpo: `/^[^\s@<>]+@[^\s@<>]+$/.test`.

SHA-256 do trecho: `c960d7c5b6d909c387d5221de2f45252792583a9c34287186f83a1a3804de130`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
