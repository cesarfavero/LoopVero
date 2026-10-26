# `parseFillSite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/secure-fill-policy.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766674-766678](../../../../../../../../reference/runtime/host-main.cjs#L766674-L766678) | `FunctionDeclaration` | não | `raw` |
| [evaluation:562187-562191](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562187-L562191) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766674-766678](../../../../../../../../reference/runtime/host-main.cjs#L766674-L766678) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562187-562191](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562187-L562191) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:766674

Chamadas escritas diretamente neste corpo: `URL.parse`, `parseSecureValueHttpsUrl`.

SHA-256 do trecho: `d5183dc6e8787dfcc42df47ea203e7851e9a68a87470bf25166c85aa18ec5880`.

### evaluation:562187

Chamadas escritas diretamente neste corpo: `URL.parse`, `parseSecureValueHttpsUrl`.

SHA-256 do trecho: `d5183dc6e8787dfcc42df47ea203e7851e9a68a87470bf25166c85aa18ec5880`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
