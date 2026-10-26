# `chatValueNames`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/vault-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767886-767890](../../../../../../../../reference/runtime/host-main.cjs#L767886-L767890) | `FunctionDeclaration` | sim | `deps` |
| [evaluation:563402-563406](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563402-L563406) | `FunctionDeclaration` | sim | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767886-767890](../../../../../../../../reference/runtime/host-main.cjs#L767886-L767890) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563402-563406](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563402-L563406) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:767886

Chamadas escritas diretamente neste corpo: `.map`, `.toSorted`, `deps.secureValues.listMetadata`, `metadata2.filter`.

SHA-256 do trecho: `10fb4b267808ab6be4e9869d830151a9c77433602fcee137cd6c6f32d89cda1b`.

### evaluation:563402

Chamadas escritas diretamente neste corpo: `.map`, `.toSorted`, `deps.secureValues.listMetadata`, `metadata2.filter`.

SHA-256 do trecho: `92395c47ff7005d071fceb07d765ab825d3ffe1782a32972a9e80f6a0787bde6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
