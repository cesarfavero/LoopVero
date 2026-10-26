# `shortenJsonValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-outline.ts` · [README do módulo](../../../../../modules/core/runner/conversation-outline-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:526209-526222](../../../../../../reference/runtime/sand-eval-runner.cjs#L526209-L526222) | `FunctionDeclaration` | não | `value, limit3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:526209-526222](../../../../../../reference/runtime/sand-eval-runner.cjs#L526209-L526222) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:526209

Chamadas escritas diretamente neste corpo: `.map`, `Array.isArray`, `Object.entries`, `Object.fromEntries`, `value.slice`.

SHA-256 do trecho: `7f3e1d291f0f952f2f3e440414ac4cbe89eddbf0f8ced9df479bfdf96e0e8ec2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
