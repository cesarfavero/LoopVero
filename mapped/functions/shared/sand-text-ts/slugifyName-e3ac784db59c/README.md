# `slugifyName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `shared/sand-text.ts` · [README do módulo](../../../../modules/shared/sand-text-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:227880-227883](../../../../../reference/runtime/host-main.cjs#L227880-L227883) | `FunctionDeclaration` | não | `name18, fallbackPrefix` |
| [evaluation:474416-474419](../../../../../reference/runtime/sand-eval-runner.cjs#L474416-L474419) | `FunctionDeclaration` | não | `name18, fallbackPrefix` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:227880-227883](../../../../../reference/runtime/host-main.cjs#L227880-L227883) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474416-474419](../../../../../reference/runtime/sand-eval-runner.cjs#L474416-L474419) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:227880

Chamadas escritas diretamente neste corpo: `.replace`, `.slice`, `Date.now`, `name18.toLowerCase`.

SHA-256 do trecho: `ef8d4243c0beb3076f69371e3f37ccac1c9a086e56e3d040512ad6ff0a555299`.

### evaluation:474416

Chamadas escritas diretamente neste corpo: `.replace`, `.slice`, `Date.now`, `name18.toLowerCase`.

SHA-256 do trecho: `ef8d4243c0beb3076f69371e3f37ccac1c9a086e56e3d040512ad6ff0a555299`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
