# `isMentionWordChar`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683161-683163](../../../../../../reference/runtime/host-main.cjs#L683161-L683163) | `FunctionDeclaration` | não | `char` |
| [evaluation:534197-534199](../../../../../../reference/runtime/sand-eval-runner.cjs#L534197-L534199) | `FunctionDeclaration` | não | `char` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683161-683163](../../../../../../reference/runtime/host-main.cjs#L683161-L683163) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534197-534199](../../../../../../reference/runtime/sand-eval-runner.cjs#L534197-L534199) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:683161

Chamadas escritas diretamente neste corpo: `/[a-z0-9]/.test`.

SHA-256 do trecho: `e6fccfc6fd2380d11d7d8a272aba38574328cebe3d6111c54049bb819f94df45`.

### evaluation:534197

Chamadas escritas diretamente neste corpo: `/[a-z0-9]/.test`.

SHA-256 do trecho: `e6fccfc6fd2380d11d7d8a272aba38574328cebe3d6111c54049bb819f94df45`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
