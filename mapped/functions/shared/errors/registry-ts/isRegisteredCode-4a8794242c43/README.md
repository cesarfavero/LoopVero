# `isRegisteredCode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/errors/registry.ts` · [README do módulo](../../../../../modules/shared/errors/registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:452606-452608](../../../../../../reference/runtime/host-main.cjs#L452606-L452608) | `FunctionDeclaration` | não | `code` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452606-452608](../../../../../../reference/runtime/host-main.cjs#L452606-L452608) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:452606

Chamadas escritas diretamente neste corpo: `Object.hasOwn`.

SHA-256 do trecho: `a1d3bf48c423e7a8e363fce1c1b771303764e8a966a477ebdda961c80e08c4d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
