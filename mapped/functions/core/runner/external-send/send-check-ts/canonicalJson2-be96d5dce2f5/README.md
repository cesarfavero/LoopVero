# `canonicalJson2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/external-send/send-check.ts` · [README do módulo](../../../../../../modules/core/runner/external-send/send-check-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582800-582807](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582800-L582807) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582800-582807](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582800-L582807) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:582800

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `.sort`, `Array.isArray`, `JSON.stringify`, `Object.keys`, `fields3.join`, `isUnknownRecord2`, `value.map`.

SHA-256 do trecho: `19ff8d22ac907a5c6c6d00d602fa4c8da6035228f7f208462da5ecf81fbd90b8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
