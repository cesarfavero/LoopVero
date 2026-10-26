# `buildSandErrorConstructors`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/errors/registry.ts` · [README do módulo](../../../../../modules/shared/errors/registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:452596-452602](../../../../../../reference/runtime/host-main.cjs#L452596-L452602) | `FunctionDeclaration` | não | `(nenhum)` |
| [evaluation:476786-476792](../../../../../../reference/runtime/sand-eval-runner.cjs#L476786-L476792) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452596-452602](../../../../../../reference/runtime/host-main.cjs#L452596-L452602) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:476786-476792](../../../../../../reference/runtime/sand-eval-runner.cjs#L476786-L476792) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:452596

Chamadas escritas diretamente neste corpo: `Object.entries`.

Alvos de atribuição ou incremento: `constructors[computed]`.

SHA-256 do trecho: `e1e71511045f549956fba8fac30221e5861637df8617986fbfa1fba3f63cd41a`.

### evaluation:476786

Chamadas escritas diretamente neste corpo: `Object.entries`.

Alvos de atribuição ou incremento: `constructors[computed]`.

SHA-256 do trecho: `e1e71511045f549956fba8fac30221e5861637df8617986fbfa1fba3f63cd41a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
