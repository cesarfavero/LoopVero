# `withFieldFromAliases`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/arg-coercion/gated-argument-alias.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/gated-argument-alias-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777571-777577](../../../../../../../../reference/runtime/host-main.cjs#L777571-L777577) | `FunctionDeclaration` | não | `entries, spec, aliases, sent` |
| [evaluation:577266-577272](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577266-L577272) | `FunctionDeclaration` | não | `entries, spec, aliases, sent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777571-777577](../../../../../../../../reference/runtime/host-main.cjs#L777571-L777577) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577266-577272](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577266-L577272) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777571

Chamadas escritas diretamente neste corpo: `Object.fromEntries`, `entries.filter`, `new Set`.

SHA-256 do trecho: `11adcc3aa000508ddd51bb9398dcdfbe488d0db32a1ce602b89c3342fd77191d`.

### evaluation:577266

Chamadas escritas diretamente neste corpo: `Object.fromEntries`, `entries.filter`, `new Set`.

SHA-256 do trecho: `11adcc3aa000508ddd51bb9398dcdfbe488d0db32a1ce602b89c3342fd77191d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
